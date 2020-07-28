import React, { FunctionComponent } from 'react';

export interface CountyStatusInfo {
    GEO: string;
    NAME: string;
    POSITIVE: number;
    NEGATIVE: number;
    DEATHS: number;
    OBJECTID: number;
    GEOID: string;
    POP: number;
    LoadDttm: number;
    PCT_POP_65: number;
    PCT_SMK: number;
    PCT_COPD: number;
    PCT_CVD: number;
    PCT_DIAB: number;
    POP_65_WI: number;
    SMK_WI: number;
    COPD_WI: number;
    CVD_WI: number;
    DIAB_WI: number;
    DATE: number;
    Shape__Area: number;
    Shape__Length: number;
}
export interface CountyStatusFeature {
    attributes: CountyStatusInfo
}
type CountyStatusProps = {
    features: CountyStatusFeature[];
}
const CountyStatus: FunctionComponent<CountyStatusProps> = ({features}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>GEO</th>
                    <th>NAME</th>
                    <th>POSITIVE</th>
                    <th>NEGATIVE</th>
                    <th>DEATHS</th>
                    <th>OBJECTID</th>
                    <th>GEOID</th>
                    <th>POP</th>
                    <th>LoadDttm</th>
                    <th>PCT_POP_65</th>
                    <th>PCT_SMK</th>
                    <th>PCT_COPD</th>
                    <th>PCT_CVD</th>
                    <th>PCT_DIAB</th>
                    <th>POP_65_WI</th>
                    <th>SMK_WI</th>
                    <th>COPD_WI</th>
                    <th>CVD_WI</th>
                    <th>DIAB_WI</th>
                    <th>DATE</th>
                    <th>Shape__Area</th>
                    <th>Shape__Length</th>
                </tr>
            </thead>
            <tbody>
            {features && features.map((feature) => {
                    const attributes = feature.attributes;
                    return (<tr key={attributes.OBJECTID}>
                            <td>{attributes.GEO}</td>
                            <td>{attributes.NAME}</td>
                            <td>{attributes.POSITIVE}</td>
                            <td>{attributes.NEGATIVE}</td>
                            <td>{attributes.DEATHS}</td>
                            <td>{attributes.OBJECTID}</td>
                            <td>{attributes.GEOID}</td>
                            <td>{attributes.POP}</td>
                            <td>{attributes.LoadDttm}</td>
                            <td>{attributes.PCT_POP_65}</td>
                            <td>{attributes.PCT_SMK}</td>
                            <td>{attributes.PCT_COPD}</td>
                            <td>{attributes.PCT_CVD}</td>
                            <td>{attributes.PCT_DIAB}</td>
                            <td>{attributes.POP_65_WI}</td>
                            <td>{attributes.SMK_WI}</td>
                            <td>{attributes.COPD_WI}</td>
                            <td>{attributes.CVD_WI}</td>
                            <td>{attributes.DIAB_WI}</td>
                            <td>{attributes.DATE}</td>
                            <td>{attributes.Shape__Area}</td>
                            <td>{attributes.Shape__Length}</td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
}


export default CountyStatus;