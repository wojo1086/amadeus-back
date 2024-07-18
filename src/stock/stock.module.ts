import { Module } from "@nestjs/common";
import { StockService } from "./stock.service";
import { StockGateway } from "./stock.gateway";
import { StockController } from "./stock.controller";

@Module({
  providers: [StockGateway, StockService],
  controllers: [StockController]
})
export class StockModule {}
