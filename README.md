# hexo-theme-saas

[![David deps](https://img.shields.io/david/outloudvi/hexo-theme-saas.svg?style=flat)](https://david-dm.org/outloudvi/hexo-theme-saas)

[![](https://nodei.co/npm/hexo-theme-saas.png?global=true)](https://nodei.co/npm/hexo-theme-saas)

Simple, awakening and sass-based.

(It's not for SaaS (Software as a Service) though.)

## Demo

[Demo](https://outloudvi.github.io/hexo-theme-saas/) / [Live demo](https://blog.outv.im)

## Usage

### For Hexo 5.0.0+:

```sh
npm install --asdeps hexo-theme-saas hexo-renderer-sass
# or: yarn add hexo-theme-saas hexo-renderer-sass
```

Then change in the `_config.yml`:

```yml
theme: saas
```

### For all versions of Hexo:

```sh
git clone https://github.com/outloudvi/hexo-theme-saas.git themes/saas
npm install --asdeps hexo-renderer-sass
# or: yarn add hexo-renderer-sass
```

Then change in the `_config.yml`:

```yml
theme: saas
```

## Editing Custom Components

### Comments

First, enable the comments feature:

``` yml
features:
  comments: true
```

Then, edit `layout/_custom/comments.ejs` to insert your own comment box.

### Webmention / Pingback

First, set up the configurations:

``` yml
features:
  linkbackPostOnly: false
  webmention: https://webmention.io/example.com/webmention
  pingback: https://webmention.io/example.com/xmlrpc
```

Then, edit `layout/_custom/webmention.ejs` to insert the webmention list.

A sample Webmention submission logic is also provided, which you might want to modify.

## Notes

- This theme doesn't use `hexo-generator-index`'s `index_generator` settings.
- This theme currently don't support categories.

## License

MIT
