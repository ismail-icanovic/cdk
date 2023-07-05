#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { S3BucketStack } from '../lib/cdk-stack';

const app = new cdk.App();

// Creating an S3 bucket stack
const s3_bucket_stack = new S3BucketStack(app, 'ismail-cdk-bucket-stack');

// Re-using assets
const bucket = s3_bucket_stack.bucket;