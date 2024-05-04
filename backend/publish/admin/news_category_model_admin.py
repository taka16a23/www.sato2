#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""news_category_model_admin --

"""
from django.contrib import admin


class NewsCategoreyModelAdmin(admin.ModelAdmin):
    """NewsCategoreyModelAdmin

    NewsCategoreyModelAdmin is a admin.ModelAdmin.
    Responsibility:
    """
    list_display = (
        'name',
        'fgcolor',
        'bgcolor',
    )
    list_editable = (
        'fgcolor',
        'bgcolor',
    )
    exclude = ['sortid', ]

    def get_actions(self, request):
        actions = super(NewsCategoreyModelAdmin, self).get_actions(request)
        if 'delete_selected' in actions:
            del actions['delete_selected']
        return actions

    # def has_delete_permission(self, request, obj=None):
    #     r"""SUMMARY

    #     has_delete_permission(request, obj=None)

    #     @Arguments:
    #     - `request`:
    #     - `obj`:

    #     @Return:

    #     @Error:
    #     """
    #     if obj is not None and obj.name in PRIMARY_CATEGORIES:
    #         return False
    #     return super(NewsCategoryAdmin, self).has_delete_permission(request, obj=None)



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# news_category_model_admin.py ends here
