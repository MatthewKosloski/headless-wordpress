# headless-wordpress

A work-in-progress starter for a headless implementation of WordPress.  There are a lot of dependencies to do something like this (e.g., PhpMyAdmin, MySQL, WordPress, Express, etc.), so a Docker container seems like a good way of going about it.  Data persistence and migration may be an issue, however.

This is a reverse engineering of [headless-wp-starter](https://github.com/postlight/headless-wp-starter).

## TODO

- Create a new image based off the WordPress image to automate the installation and activation of themes and plugins.  Will probably need to use [WP CLI](https://wp-cli.org/).
- Figure out a good way to back up the database if the volumes are deleted.

## Usage

1. Start the services in detached mode:

```
    docker-compose up -d
```

2. Stop the services:

```
    docker-compose down
```

If you want to delete the persisted data from the `db_data` volume, optionally add the `--volumes` flag:

```
    docker-compose down --volumes
```