import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3n from 'aws-cdk-lib/aws-s3-notifications';
import * as cdk from 'aws-cdk-lib';
import {Construct} from "constructs";
import * as lambda from 'aws-cdk-lib/aws-lambda';
// Allows the stack to receive a lambda.function object
export interface S3Props extends cdk.StackProps{
  readonly lambdaFunction: lambda.Function;
}
export class S3BucketStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: S3Props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    this.bucket = new s3.Bucket(this, id,{
      versioned: true,
      bucketName: "ismail-cdk-bucket",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

     this.bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(props.lambdaFunction));
  }
}
