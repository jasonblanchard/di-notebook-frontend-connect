locals {
  api_gateway_id = "lijpimk8ec"
}

resource "aws_apigatewayv2_integration" "frontend" {
  api_id             = local.api_gateway_id
  integration_type   = "HTTP_PROXY"
  integration_method = "GET"
  integration_uri    = "https://di-notebook-frontend-connect.vercel.app/{proxy}"
}

resource "aws_apigatewayv2_route" "frontend" {
  api_id    = local.api_gateway_id
  route_key = "GET /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.frontend.id}"
}
