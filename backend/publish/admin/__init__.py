#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""Name: __init__.py


"""
from django.contrib import admin

from publish.models import NewsCategoryModel
from publish.models import NewsModel
from publish.admin.news_category_model_admin import NewsCategoreyModelAdmin
from publish.admin.news_model_admin import NewsModelAdmin


__all__ = [
    'NewsCategoreyModelAdmin',
    'NewsModelAdmin',
]

admin.site.register(NewsCategoryModel, NewsCategoreyModelAdmin)
admin.site.register(NewsModel, NewsModelAdmin)



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# __init__.py ends here
