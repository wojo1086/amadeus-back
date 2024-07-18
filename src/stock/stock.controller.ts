import { Controller, Get } from "@nestjs/common";
import { StockService } from "./stock.service";
import { StockEntity } from "./entities/stock.entity";

@Controller('stocks')
export class StockController {
    constructor(private readonly stockService: StockService) {
    }

    /**
     * Get all stocks
     */
    @Get()
    getAllStocks(): StockEntity[] {
        return this.stockService.findAll();
    }
}
