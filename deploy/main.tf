provider "aws" {
  region     = "us-east-1"
  access_key = ""
  secret_key = ""
}

resource "aws_lambda_function" "create_user_function" {
  role             = aws_iam_role.lambda-ddd-role.arn
  function_name    = "CreateUserFunction"
  handler          = "functions/CreateUserFunction.handle"
  runtime          = "nodejs22.x"
  filename         = "../dist/functions.zip"
  source_code_hash = filebase64sha256("../dist/functions.zip")
  depends_on       = [aws_iam_role.lambda-ddd-role]
  layers           = [aws_lambda_layer_version.lambda-ddd-layer.arn]
  environment {
    variables = {
      NODE_ENV = "production"
    }
  }
}

resource "aws_iam_role" "lambda-ddd-role" {
  name = "lambda-ddd-execution-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_lambda_layer_version" "lambda-ddd-layer" {
  layer_name          = "domain"
  filename            = "../dist/layers.zip"
  source_code_hash    = filebase64sha256("../dist/layers.zip")
  compatible_runtimes = ["nodejs22.x"]
}

