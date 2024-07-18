import { StockEntity } from "./entities/stock.entity";

/**
 * Stock seed data. This data would typically come from a database.
 */
export const stockSeed: StockEntity[] = [
    {
        id: 'aabe29fc-ffb0-45bd-a994-5fe5e3aae925',
        name: 'Google Inc',
        symbol: 'GOOGL',
        currentPrice: 576.00,
        closingPrice: 575.00,
        url: 'https://google.com'
    },
    {
        id: '6ec90b2d-d7a7-4bdb-b549-7a5cb73dc3a6',
        name: 'Baidu Inc (ADR)',
        symbol: 'BIDU',
        currentPrice: 180.00,
        closingPrice: 179.00,
        url: 'https://ir.baidu.com/'
    },
    {
        id: 'b748516a-3d00-4989-8992-6c103443f7b7',
        name: 'Yandex NV',
        symbol: 'YNDX',
        currentPrice: 15.00,
        closingPrice: 14.00,
        url: 'https://ir.yandex/'
    },
    {
        id: '10533e19-4863-4be7-b97f-d99629f10050',
        name: 'Blucora Inc',
        symbol: 'BCOR',
        currentPrice: 10.00,
        closingPrice: 9.00,
        url: 'https://www.globaldata.com/company-profile/blucora-inc/'
    },
    {
        id: 'f2f1a143-2177-4e8f-b50d-da4b53854779',
        name: 'Yahoo! Inc',
        symbol: 'YHOO',
        currentPrice: 40.00,
        closingPrice: 39.00,
        url: 'https://yahoo.com'
    },
    {
        id: 'c44e95f6-74a4-4f85-a690-b31f7468a0fb',
        name: 'Microsoft Corporation',
        symbol: 'MSFT',
        currentPrice: 50.00,
        closingPrice: 49.00,
        url: 'https://microsoft.com'
    },
    {
        id: 'f7b457c1-a5b1-4e31-b1a6-e7c4d1182a7a',
        name: 'IAC/InterActiveCorp',
        symbol: 'IACI',
        currentPrice: 70.00,
        closingPrice: 69.00,
        url: 'https://www.iac.com/'
    },
    {
        id: '44e8edda-e112-4a1a-9992-6d06443c61bb',
        name: 'Facebook Inc',
        symbol: 'FB',
        currentPrice: 80.00,
        closingPrice: 79.00,
        url: 'https://www.facebook.com/'
    },
    {
        id: '8943e04f-bb68-47c5-be37-7cf7219863d0',
        name: 'Apple Inc',
        symbol: 'AAPL',
        currentPrice: 127.00,
        closingPrice: 126.00,
        url: 'https://apple.com'
    },
    {
        id: '9cf4aded-157c-47b0-ab2b-77fc017287b4',
        name: 'eBay Inc',
        symbol: 'EBAY',
        currentPrice: 60.00,
        closingPrice: 59.00,
        url: 'https://ebay.com'
    },
    {
        id: '070582e0-137d-495b-85d2-f62f55203f45',
        name: 'LinkedIn Corporation',
        symbol: 'LNKD',
        currentPrice: 270.00,
        closingPrice: 269.00,
        url: 'https://linkedin.com'
    }
];
