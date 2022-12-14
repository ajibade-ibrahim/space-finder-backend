import { Context, APIGatewayProxyCallback, APIGatewayEvent } from 'aws-lambda';
import { SpaceRepository } from '../Repositories/space-repository'

export const handler = async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback): Promise<void> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  new SpaceRepository().createItem()
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
    }),
  });
};
