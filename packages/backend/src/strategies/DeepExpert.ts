export abstract class DeepExpert {
  constructor(protected domain: string) {}

  abstract signal(marketData: any): any;
}
