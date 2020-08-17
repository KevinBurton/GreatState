import { DefaultAzureCredential } from '@azure/identity';
import{ SecretClient } from '@azure/keyvault-secrets';

export default class AzureKeyVault {
    private keyVaultName: string;
    private keyVaultUri: string;
    private keyVaultClient: SecretClient;
    constructor(keyVaultName: string) {
        this.keyVaultName = keyVaultName;
        this.keyVaultUri = `https://${keyVaultName}.vault.azure.net`;
        // https://docs.microsoft.com/en-us/azure/key-vault/secrets/quick-create-node
        // The DefaultAzureCredential method in our application relies on three environmental variables: AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, and AZURE_TENANT_ID
        const credential = new DefaultAzureCredential();
        this.keyVaultClient = new SecretClient(this.keyVaultUri, credential);
    }
    get Auth0Secret() {
        return (async () => await this.keyVaultClient.getSecret('Auth0Secret'));
    }
    get Auth0ClientId() {
        return (async () => await this.keyVaultClient.getSecret('Auth0ClientId'));
    }
    get Auth0Domain() {
        return (async () => await this.keyVaultClient.getSecret('Auth0Domain'));
    }
    get WodiftyPassword() {
        return (async () => await this.keyVaultClient.getSecret('WodiftyPassword'));
    }
    get WodiftyUser() {
        return (async () => await this.keyVaultClient.getSecret('WodiftyUser'));
    }
    get GoogleMapApiKey() {
        return (async () => await this.keyVaultClient.getSecret('GoogleMapApiKey'));
    }
}
