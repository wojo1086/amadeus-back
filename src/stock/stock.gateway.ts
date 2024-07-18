import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { stockSeed } from "./stock.seed";

@WebSocketGateway({cors: true})
export class StockGateway implements OnGatewayConnection, OnGatewayDisconnect {
    // Get a reference to the WebSocket server
    @WebSocketServer() server;

    private connections: number = 0;
    private stockInterval: NodeJS.Timeout;

    /**
     * Handle a new connection. Add the connection to the count and start the stock updates if this is the first connection.
     */
    handleConnection(): any {
        this.connections++;
        if (this.connections === 1 && !this.stockInterval) {
            this.startStocksUpdate();
        }
    }

    /**
     * Handle a disconnect. Remove the connection from the count and stop the stock updates if there are no more connections.
     */
    handleDisconnect(): any {
        this.connections--;
        if (this.connections === 0) {
            this.endStocksUpdate();
        }
    }

    /**
     * Start updating the stock prices every 5 seconds
     * @private
     */
    private startStocksUpdate() {
        this.stockInterval = setInterval(this.updateStocks.bind(this), 5000);
    }

    /**
     * Stop updating the stock prices
     * @private
     */
    private endStocksUpdate() {
        clearInterval(this.stockInterval);
        this.stockInterval = null;
    }

    /**
     * Update the stock prices. Iterate through each stock and randomly change the price.
     * @private
     */
    private updateStocks() {
        stockSeed.forEach(stock => {
            const willChange = this.getRandomNumber(0, 1) > 0.5; // 50/50 chance of changing the price
            if (willChange) {
                const change = this.getRandomNumber(-2, 2);
                stock.currentPrice += change;
            }
        });
        this.server.emit('findAllStocks', stockSeed);
    }

    /**
     * Get a random number between min and max exclusive
     * @param min
     * @param max
     * @private
     */
    private getRandomNumber(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}
