import { ipc } from "@/db/ipc/data";
import { Card, Title, AreaChart } from "@tremor/react"

const dataFormatter = (number) => {
  return number + "%"; // Formate os valores do eixo y como porcentagens, se necessário.
};

export default function MyAreaChart() {
  return (
    <Card>
      <Title>Variação do IPC ao longo do tempo</Title>
      <AreaChart
      className="h-72 mt-4"
      data={ipc}
      index="mes"
      categories={["Habit", "Aliment", "Transp", "Desp", "Saúde", "Vest", "Educ", "Geral"]}
      colors={["indigo", "cyan", "slate", "gray", "zinc", "neutral", "stone", "red"]}
      valueFormatter={dataFormatter}
      type="area" // Defina o tipo como "area"
    />
    
    </Card>
  );
}
