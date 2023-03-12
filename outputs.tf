output "root_site" {
  sensitive = true
  value     = module.root_site
}

output "site_group" {
  sensitive = true
  value     = module.site_group
}

output "sites" {
  sensitive = true

  value = {
    www = module.www
  }
}
