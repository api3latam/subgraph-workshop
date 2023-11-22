"use client";

import React, { useState, useEffect } from 'react';
import { formatEther } from "ethers";

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
                    allValsSum += Number(
                        formatEther(
                            entry.value
                        )
                    );
                    allValsCount++;
                    allTimestamps.push(entry.timestamp);
                });

                allData.push([
                    index,
                    ticker,
                    (allValsSum / allValsCount).toFixed(4),
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
            <div>
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Ticker</th>
                            <th className="px-6 py-3">Median Value</th>
                            <th className="px-6 py-3">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((entry) => (
                            <tr key={entry[0]} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{entry[1]}</td>
                                <td className="px-6 py-4">{`$ ${entry[2]}`}</td>
                                <td className="px-6 py-4">
                                    {new Date(entry[3]*1000).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='mt-8 flex justify-center'>
                <button className="bg-red-300 text-black p-3" onClick={fetchData}>
                    Reload
                </button>
            </div>
        </div>
    );
}

export default TableComponent;
