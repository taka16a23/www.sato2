#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""Name: __init__.py


"""
from django.contrib import admin

from publish.models import NewsCategoryModel
from publish.admin.news_category_model_admin import NewsCategoreyModelAdmin

__all__ = [
    'NewsCategoreyModelAdmin',
]

admin.site.register(NewsCategoryModel, NewsCategoreyModelAdmin)



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# __init__.py ends here
