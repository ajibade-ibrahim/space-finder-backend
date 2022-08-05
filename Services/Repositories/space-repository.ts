import { DynamoDB } from 'aws-sdk'
import { v4 } from 'uuid'
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client'

export class SpaceRepository {
  private client = new DynamoDB.DocumentClient()

  async createItem(): Promise<void> {
    const item: DocumentClient.PutItemInput = {
      TableName: 'spaces',
      Item: {
        spaceId: v4()
      }
    }

    await this.client.put(item).promise()
  }
}

