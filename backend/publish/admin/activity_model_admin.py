#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""activity_model_admin --

"""
from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin


class ActivityModelAdmin(SummernoteModelAdmin):
    """ActivityModelAdmin

    ActivityModelAdmin is a admin.ModelAdmin.
    Responsibility:
    """
    summernote_fields = (
        'body',
    )
    list_display = (
        'title',
        'status',
        'publish_date',
        'expiry_date',
    )
    list_editable = (
        'status',
    )
    ordering = (
        '-publish_date',
    )
    radio_fields = {
        'status': admin.HORIZONTAL,
    }



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# activity_model_admin.py ends here
