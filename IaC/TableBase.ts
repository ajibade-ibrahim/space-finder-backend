import { Stack } from 'aws-cdk-lib'
import { Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb'

export class TableBase {
  private table: Table

  constructor(private readonly stack: Stack, private readonly name: string, private readonly pk: string) {
    this.initialize()
  }

  initialize(): void {
    this.table = new Table(this.stack, this.name, {
      tableName: this.name,
      partitionKey: {
        name: this.pk,
        type: AttributeType.STRING
      }
    })
  }
}
