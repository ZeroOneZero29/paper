import "../css/News.css"

export default function News() {
  return (
    <div className="news">
      <div className="news-container">
        <p className="news_title">Новости IT</p>
        <div id="news-block" className="news-block">
          <div id="news_item" className="news_item">
            <p id="item_title" className="item_title">
              Новейшие ноутбуки и консоли научились взламывать картой памяти —
              стандарт SD Express упростил DMA-атаки
            </p>
            <p id="item_text" className="item_text">
              Специалисты Positive Technologies сообщили, что злоумышленники
              могут использовать карты памяти SD Express для прямого доступа к
              системной памяти и взлома целевого устройства при наличии
              физического доступа к нему. Это возможно благодаря архитектурной
              особенности новых пользовательских устройств, которые подключаются
              к компьютеру и имеют прямой доступ к его памяти через механизм DMA
              (Direct Memory Access). #dma #sdexpress #уязвимость"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
