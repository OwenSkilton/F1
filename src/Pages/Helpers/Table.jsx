export function Table(headers, rows, tableClass){
    return (
        <div className={"table-container"}>
            <table className={tableClass || "table table-striped"}>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th id={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            {row.map((value, j) => (
                                <td key={`${i}-${j}`}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}