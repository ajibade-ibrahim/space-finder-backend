import { App } from 'aws-cdk-lib'
import { SpaceStack } from './SpaceStack'

const app = new App()
new SpaceStack(app, 'SpaceStack', { stackName: 'space-finder-backend' })
