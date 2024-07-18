import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { StockModule } from "./stock/stock.module";

@Module({
    imports: [
        StockModule,
    ],
    controllers: [AppController],
})
export class AppModule {
}
