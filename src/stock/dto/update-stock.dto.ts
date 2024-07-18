import { PartialType } from '@nestjs/mapped-types';
import { CreateStockDto } from './create-stock.dto';
import { IsUUID } from "class-validator";

export class UpdateStockDto extends PartialType(CreateStockDto) {

  @IsUUID()
  id: string;
}
