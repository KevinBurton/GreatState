import React, { FunctionComponent } from 'react';

export interface CountyTestingAttributes {
    OBJECTID: number;
    CT_ID: string;
    CMNTY_SRVD: string;
    NAME: string;
    TYPE: string;
    COUNTY: string;
    ADDRESS: string;
    CITY: string;
    STATE: string;
    ZIP: number;
    LAT: number;
    LON: number;
    STATUS: string;
    ACTIVE: string;
    LOC_DISC: string;
    DATES: string;
    HOURS: string;
    PROCESS: string;
    PHONE: string;
    PHONE2: string;
    CONTACT: string;
    CONTACT2: string;
}

export interface CountyTestingFeature {
    attributes: CountyTestingAttributes;
}
type CountyTestingProps = {
    features: CountyTestingFeature[];
}
const CountyTesting: FunctionComponent<CountyTestingProps> = ({features}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>CT_ID</th>
                    <th>CMNTY_SRVD</th>
                    <th>NAME</th>
                    <th>TYPE</th>
                    <th>COUNTY</th>
                    <th>ADDRESS</th>
                    <th>CITY</th>
                    <th>STATE</th>
                    <th>LAT</th>
                    <th>LON</th>
                    <th>STATUS</th>
                    <th>ACTIVE</th>
                    <th>LOC_DISC</th>
                    <th>DATES</th>
                    <th>HOURS</th>
                    <th>PROCESS</th>
                    <th>PHONE</th>
                    <th>PHONE2</th>
                    <th>CONTACT</th>
                    <th>CONTACT2</th>
                </tr>
            </thead>
            <tbody>
            {features && features.map((feature) => {
                    const attributes = feature.attributes;
                    return (<tr key={attributes.OBJECTID}>
                            <td>{attributes.CT_ID}</td>
                            <td>{attributes.CMNTY_SRVD}</td>
                            <td>{attributes.NAME}</td>
                            <td>{attributes.TYPE}</td>
                            <td>{attributes.COUNTY}</td>
                            <td>{attributes.ADDRESS}</td>
                            <td>{attributes.CITY}</td>
                            <td>{attributes.STATE}</td>
                            <td>{attributes.LAT}</td>
                            <td>{attributes.LON}</td>
                            <td>{attributes.STATUS}</td>
                            <td>{attributes.ACTIVE}</td>
                            <td>{attributes.LOC_DISC}</td>
                            <td>{attributes.DATES}</td>
                            <td>{attributes.HOURS}</td>
                            <td>{attributes.PROCESS}</td>
                            <td>{attributes.PHONE}</td>
                            <td>{attributes.PHONE2}</td>
                            <td><a href={attributes.CONTACT}>{attributes.CONTACT}</a></td>
                            <td>{attributes.CONTACT2}</td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
}   

export default CountyTesting;