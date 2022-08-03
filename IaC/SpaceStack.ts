import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { TableBase } from './TableBase'

export class SpaceStack extends Stack {
  private readonly spaceTable: TableBase;
  constructor(scope: Construct, id: string,  props: StackProps) {
    super(scope, id, props)
    this.spaceTable = new TableBase(this, 'spaces', 'spaceId')
  }
}
