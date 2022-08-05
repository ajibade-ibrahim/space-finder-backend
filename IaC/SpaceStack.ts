import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { TableBase } from './TableBase'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { join } from 'path'
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway'
import { PolicyStatement } from 'aws-cdk-lib/aws-iam'

export class SpaceStack extends Stack {
  private readonly spaceTable: TableBase;
  private readonly api = new RestApi(this, 'spaceApi')

  constructor(scope: Construct, id: string,  props: StackProps) {
    super(scope, id, props)
    this.spaceTable = new TableBase(this, 'spaces', 'spaceId')
    const policy = new PolicyStatement()
    policy.addAllResources()
    policy.addActions('dynamodb:PutItem')

    const helloLambdaNodeJs = new NodejsFunction(this, 'helloLambdaNodeJs', {
      entry: (join(__dirname, '..', 'services', 'lambdas', 'create-space.ts')),
      handler: 'handler',
      initialPolicy: [policy]
    });

    const spacesResource = this.api.root.addResource('spaces')
    spacesResource.addMethod('GET', new LambdaIntegration(helloLambdaNodeJs))
  }
}
