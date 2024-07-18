type OrderDetailsType = {
  price: number;
  time: number;
};

export const OrderDetails = ({ price, time }: OrderDetailsType) => (
  <div className="mt-4 pt-4 border-t flex flex-col gap-2">
    <h2 className="text-white text-xl font-bold ">resumo</h2>
    <div>
      <p>Preço Total: R$ {price.toFixed(2)}</p>
      <p>Tempo de Preparo: {time} minutos</p>
    </div>
  </div>
);
