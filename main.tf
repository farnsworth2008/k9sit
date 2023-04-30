data "aws_vpc" "this" {
  default = true
}

locals {
  k9me_group = module.k9me_site_group
  group      = module.site_group
}

module "anywhere" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "anywhere"
  tags        = local.group.tags
}

module "apex_nc" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "apex-nc"
  tags        = local.group.tags
}

module "cary_nc" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "cary-nc"
  tags        = local.group.tags
}

module "charlotte_nc" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "charlotte-nc"
  tags        = local.group.tags
}

module "durham_nc" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "durham-nc"
  tags        = local.group.tags
}

module "greensboro_nc" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "greensboro-nc"
  tags        = local.group.tags
}

module "k9me_root_site" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.3.42"

  domain      = local.k9me_group.domain
  favicon     = null
  kms_key_arn = null
  name        = null
  tags        = local.k9me_group.tags
}

# tfsec:ignore:aws-ec2-no-public-egress-sgr
# tfsec:ignore:aws-ec2-no-public-ingress-sgr
module "k9me_site_group" {
  source = "github.com/s3d-club/terraform-aws-site-group?ref=v1.1.0"

  cidr6s        = ["::/0"]
  cidrs         = ["0.0.0.0/0"]
  domain        = "k9me.com"
  name          = "k9me"
  ec2_key_name  = "s3d"
  ecrs          = ["python"]
  egress_cidr6s = ["::/0"]
  egress_cidrs  = ["0.0.0.0/0"]
  enable_ec2    = false
  kms_key_id    = null
  tags          = {}
  vpc_id        = data.aws_vpc.this.id
}

module "k9me_www" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.k9me_group.domain
  favicon     = null
  kms_key_arn = null
  tags        = local.k9me_group.tags
}

module "kent_oh" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "kent-oh"
  tags        = local.group.tags
}

module "name" {
  source = "github.com/s3d-club/terraform-external-data-name-tags?ref=v1.1.0"

  context = "s3d-account"
  path    = path.module
  tags    = local.group.tags
}

module "raleigh_nc" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "raleigh-nc"
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
  tags          = {}
  vpc_id        = data.aws_vpc.this.id
}

module "wake_forest_nc" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  name        = "wake-forest-nc"
  tags        = local.group.tags
}

module "www" {
  count  = 1
  source = "github.com/s3d-club/terraform-aws-site?ref=v1.2.0"

  domain      = local.group.domain
  favicon     = null
  kms_key_arn = null
  tags        = local.group.tags
}
