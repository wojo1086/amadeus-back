import { IsInt, IsString, Max, MaxLength } from "class-validator";

export class CreateStockDto {

    @IsString()
    @MaxLength(255)
    name: string;

    @IsString()
    @MaxLength(5)
    symbol: string;

    @IsInt()
    @Max(9999999999.99)
    currentPrice: number;

    @IsInt()
    @Max(9999999999.99)
    closingPrice: number;

    @IsString()
    @MaxLength(255)
    url: string;
}
