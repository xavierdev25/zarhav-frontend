'use client'
// Define la estructura de las columnas
export interface Column<T> {
    key: keyof T;
    header: string;
    // Renderizado personalizado para celdas (ej: botones, formato de moneda)
    render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    className?: string;
    emptyMessage?: string;
}

// Usamos genéricos (<T>) para tipar las filas de datos
export const Table = <T extends {}>({ data, columns, className, emptyMessage = "No se encontraron datos." }: TableProps<T>): React.JSX.Element => {
    if (data.length === 0) {
        return (
            <div className={`p-4 bg-white rounded-md shadow ${className}`}>
                <p className="text-gray-500 text-center">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className={`overflow-x-auto rounded-md shadow ${className}`}>
            <table className="min-w-full divide-y divide-gray-200">

                {/* Cabecera */}
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={String(column.key)}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Cuerpo */}
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50 transition duration-100 ease-in-out">
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                >
                                    {/* Usa el render personalizado si existe, sino el valor directo */}
                                    {column.render
                                        ? column.render(row)
                                        : String(row[column.key as keyof T])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};