import AWS from 'aws-sdk';

const sns = new AWS.SNS();

export const publishSNSEvent = async (message: string, subject: string, topicARN: string) => {
  const params = {
    Message: message,
    Subject: subject,
    TopicArn: topicARN,
  };
  console.log('Publishing SNS Event:', params);
  return await sns.publish(params).promise();
};
