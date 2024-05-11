#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""Name: __init__.py


"""
from django.contrib import admin

from formats.models import SatoFormatModel
from formats.admin.sato_format_model_admin import SatoFormatModelAdmin


__all__ = [
    'SatoFormatModelAdmin',
]

admin.site.register(SatoFormatModel, SatoFormatModelAdmin)



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# __init__.py ends here
