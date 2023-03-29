data "aws_vpc" "this" {
  default = true
}

locals {
  group = module.site_group
}

module "daytona_beach_fl" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "daytona-beach-fl"
  tags        = local.group.tags
}

module "name" {
  source = "github.com/s3d-club/terraform-external-data-name-tags?ref=v1.1.0"

  context = "s3d-account"
  path    = path.module
  tags    = {}
}

module "nc_raleigh_ne" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "ne-raleigh-nc"
  tags        = local.group.tags
}

module "root_site" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.3.42"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = null
  tags        = local.group.tags
}

# tfsec:ignore:aws-ec2-no-public-egress-sgr
# tfsec:ignore:aws-ec2-no-public-ingress-sgr
module "site_group" {
  source = "github.com/s3d-club/terraform-aws-site-group?ref=v1.1.0"

  cidr6s        = ["::/0"]
  cidrs         = ["0.0.0.0/0"]
  domain        = "k9sit.com"
  name          = "s3d"
  ec2_key_name  = "s3d"
  ecrs          = ["python"]
  egress_cidr6s = ["::/0"]
  egress_cidrs  = ["0.0.0.0/0"]
  enable_ec2    = false
  kms_key_id    = null
  tags          = module.name.tags
  vpc_id        = data.aws_vpc.this.id
}

module "www" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  tags        = local.group.tags
}
