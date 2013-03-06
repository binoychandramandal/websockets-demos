Ext.define('WebSocketDemo.store.StockStore', {
    extend: 'Ext.data.Store',
    model: 'WebSocketDemo.model.StockModel',
    sortOnLoad: true,
    sorters: { property: "symbol", direction: "ASC" }
});