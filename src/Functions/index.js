let proximoIdItem = 0;

export const adicionarItem = (texto) => ({
  type: "ADICIONAR_ITEM",
  payload: {
    id: proximoIdItem++,
    texto,
  },
});

export const alternarItem = (id) => ({
  type: "ALTERNAR_ITEM",
  payload: { id },
});

export const deletarItem = (id) => ({
  type: "DELETAR_ITEM",
  payload: { id },
});
