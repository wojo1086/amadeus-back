import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StockEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 255, comment: 'Name of the stock', nullable: false})
    name: string;

    @Column({ type: 'char', length: 5, unique: true, comment: 'Ticker symbol of the stock', nullable: false})
    symbol: string;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false, default: 0, comment: 'Price of the stock in USD'})
    currentPrice: number;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false, default: 0, comment: 'Price of the stock in USD'})
    closingPrice: number;

    @Column({type: 'varchar', length: 255, comment: 'URL of the company', nullable: false})
    url: string;
}
