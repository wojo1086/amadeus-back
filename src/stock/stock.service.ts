import { Injectable } from "@nestjs/common";
import { StockEntity } from "./entities/stock.entity";
import { stockSeed } from "./stock.seed";

@Injectable()
export class StockService {

    /**
     * Get all stocks. Mimics a database query.
     */
    findAll(): StockEntity[] {
        return stockSeed;
    }
}
