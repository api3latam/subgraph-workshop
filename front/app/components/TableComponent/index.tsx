"use client";

import React, { useState, useEffect } from 'react';
import { parseEther } from "ethers";

import { dataFeedIds } from "../../lib/constants";
import { getClient } from '../../lib/utils';
import { GET_UPDATES } from '../../lib/queries';
import { SignedDataUpdate } from "../../lib/definitions";

function TableComponent() {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const client = getClient();

    const getBeaconIdData = async (
        beaconId: string
    ) => {
        console.log(`Querying for beaconId: ${beaconId}`);
        const { data } = await client.query({
            query: GET_UPDATES,
            variables: {
                beaconId: beaconId
            }
        });

        console.log(`Done with query for beaconId: ${beaconId}`);
        const output: Array<SignedDataUpdate> = data.updatedBeaconWithSignedDatas
        return output
    }

    const fetchData = async () => {
        try {
            console.log("Retrieving all the data...");
            let allData = [];
            let index = 0;
            for (let [ticker, beaconId] of Object.entries(dataFeedIds)) {
                const outputData = await getBeaconIdData(beaconId);

                let allValsSum = 0;
                let allValsCount = 0;
                let allTimestamps: Array<number> = []

                outputData.map((entry) => {
                    allValsSum += entry.value;
                    allValsCount++;
                    allTimestamps.push(entry.timestamp);
                });

                allData.push([
                    index,
                    ticker,
                    (allValsSum / allValsCount).toPrecision(4),
                    Math.max(...allTimestamps)
                ]);

                index++;
            }
            setTableData(allData);
        } catch (err) {
            console.error("Error fetching data:", err);
        } finally {
            console.log("Succesfully retrieve all the data!");
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!isLoading) {
        console.log(tableData);
    }

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <table className="table-auto border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-300">Ticker</th>
                            <th className="border border-gray-300">Median Value</th>
                            <th className="border border-gray-300">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((entry) => (
                            <tr key={entry[0]}>
                                <td className="border border-gray-300">{entry[1]}</td>
                                <td className="border border-gray-300">{entry[2]}</td>
                                <td className="border border-gray-300">
                                    {new Date(entry[3]*1000).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <button className="bg-red-300 text-white p-3" onClick={fetchData}>
                    Reload
                </button>
            </div>
        </div>
    );
}

export default TableComponent;
