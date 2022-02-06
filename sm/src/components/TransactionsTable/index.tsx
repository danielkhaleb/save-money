import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulp</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>dasda da asdas</td>
                        <td className="withdraw"> - R$ 332134</td>
                        <td>DEV</td>
                        <td>22/08/1995</td>
                    </tr>
                    <tr>
                        <td>dasda da asdas</td>
                        <td className="deposit">R$ 332134</td>
                        <td>DEV</td>
                        <td>22/08/1995</td>
                    </tr>
                    <tr>
                        <td>dasda da asdas</td>
                        <td>R$ 332134</td>
                        <td>DEV</td>
                        <td>22/08/1995</td>
                    </tr>
                    <tr>
                        <td>dasda da asdas</td>
                        <td>R$ 332134</td>
                        <td>DEV</td>
                        <td>22/08/1995</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}