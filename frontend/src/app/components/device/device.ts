export class DeviceResponse {
  public id!: string;
  public Color!: string;
  public PartNumber!: string;
  public Category_fk!: string;
}

export class CategoryResponse {
  public id!: string;
  public NameCategory!: string;

}
export class DeviceRequest {
  public Color!: string;
  public PartNumber!: string;
  public Category_fk!: string;
}
export class DeviceId {
  public id!: string;
}
