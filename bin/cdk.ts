#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import {S3BucketStack, S3Props} from '../lib/cdk-stack';
import { basicLambdaStack } from '../lib/basic-lambda-stack';

const app = new cdk.App();
// Deploying basic Lambda function
const basic_lambda_stack = new basicLambdaStack(app, 'ismail-cdk-basicLambdaStack');
// Creating an S3 bucket stack
const s3_bucket_stack = new S3BucketStack(app, 'ismail-cdk-bucket-stack', {
    lambdaFunction: basic_lambda_stack.lambdaFunction
});
// Re-using assets
const bucket = s3_bucket_stack.bucket;
