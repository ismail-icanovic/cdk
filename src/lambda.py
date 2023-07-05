import logging

logger = logging.getLogger()
logger.setLevel(logging.CRITICAL)


def lambda_handler(event, context):
    logger.info("Lambda function invoked")
    logger.info(event)
    return {
        "statusCode": 200
    }


# For direct invocation and testing on the local machine
if __name__ == '__main__':
    print(lambda_handler(None, None))
