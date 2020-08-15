import forge from 'node-forge';
import axios, { AxiosInstance } from 'axios';

//var crypto = require("crypto")
//var request = require('request');

// async function main() {
//    var json = [
//   {
//     slot_ID: 12345,
//     ID: "5cdad72f-c848-4df0-8aaa-ffe033e75d57",
//     availability_Value: 100,
//     performance_Value: 6.954,
//     measurement_Name: "last_one_hour",
//     duration: 3600,
//     warning_Threshold: 0,
//     critical_Threshold: 0,
//     IsActive: "true",
//   },
//   {
//     slot_ID: 67890,
//     ID: "b6bee458-fb65-492e-996d-61c4d7fbb942",
//     availability_Value: 100,
//     performance_Value: 3.379,
//     measurement_Name: "last_one_hour",
//     duration: 3600,
//     warning_Threshold: 0,
//     critical_Threshold: 0,
//     IsActive: "false",
//   }
// ];

// var body = JSON.stringify(json);
//     var contentLength =Buffer.byteLength(body,'utf8');
//     var key = ''
//     var workspaceId = '';
//     var apiVersion = '2016-04-01';
//     var GMTTime = new Date().toUTCString()

//     var StringToSign = 'POST' + '\n'
//          + contentLength+'\n'
//         + 'application/json' + '\n'
//         +'x-ms-date:'+ GMTTime + '\n'
//         + '/api/logs'  
//     var Sig = crypto.createHmac('sha256', Buffer.from(key, 'base64')).update(StringToSign, 'utf-8').digest('base64');
    
//     var authorization = 'SharedKey ' + workspaceId + ':' + Sig;
//     var headers = {
//         "Content-Type":"application/json",
//         "Authorization": authorization,
//         "Log-Type": 'demoexample',
//         "x-ms-date": GMTTime,
//         "time-generated-field" : new Date().toISOString
//     };
//     var url = 'https://' + workspaceId + '.ods.opinsights.azure.com/api/logs?api-version=' + apiVersion;
//     request.post({ url: url, headers: headers, body: body }, function (error, response){

//           if (error){
//               console.log(error)

//           }else{

//             console.log(response.statusCode + "   " + response.statusMessage)
//           }

//     })
// }
// Date Sat, 15 Aug 2020 05:12:40 GMT Message Covid Signature oc9/EZeJHyITBqrVP86vwPe/iR/h/WN5RYkbxaYFZFk=

export default class AzureLogging {
    private secret: string;
    private logName : string;
    private workspaceId: string;
    private axiosInstance: AxiosInstance;
    constructor(workspaceId: string, logName: string, secret: string) {
            this.secret = secret;
            this.logName = logName;
            this.workspaceId = workspaceId;
            this.axiosInstance = axios.create({
                baseURL: `https://${this.workspaceId}.ods.opinsights.azure.com`,
                url: '/api/logs',
            });
    }
    private StringToByteArray(buffer: string): Array<number> {
        var utf8 = unescape(encodeURIComponent(buffer));

        let arr: Array<number> = [];
        for (let i = 0; i < utf8.length; i++) {
            arr.push(utf8.charCodeAt(i));
        }
        return arr;
    }
    private BuildSignature(stringToSign: string): string {
      const hmac = forge.hmac.create();
      hmac.start('sha256', forge.util.createBuffer(forge.util.decode64(this.secret)));
      hmac.update(forge.util.encodeUtf8(stringToSign));
      return forge.util.encode64(hmac.digest().bytes());
    }
    private Signature(message: string, dateString: string): string {

        const jsonBytesLength: number = unescape(encodeURIComponent(message)).length;
        const stringToHash = "POST\n" + jsonBytesLength + "\napplication/json\n" + "x-ms-date:" + dateString + "\n/api/logs";
        return this.BuildSignature(stringToHash);
    }
    Log(message: string) {
        const now = new Date();
        const signature = this.Signature(message, now.toUTCString());
        console.log(`Date ${now.toUTCString()} Message ${message} Signature ${signature}`);
        this.axiosInstance.post( '/api/logs?api-version=2016-04-01', message, {
            headers: {
              Authorization: signature,
              'Log-Type': this.logName,
              'x-ms-date': now.toUTCString(),
              'time-generated-field': now.toISOString()
            }
          }).then((response) => {
            // Success
            console.log(response);
          }).catch(err => {
            // Error
            console.log(err);
            return err;
          });
    }
}