#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""hall_request_model_admin --

"""
from django.contrib import admin


class HallRequestModelAdmin(admin.ModelAdmin):
    """HallRequestModelAdmin

    HallRequestModelAdmin is a admin.ModelAdmin.
    Responsibility:
    """
    list_display = (
        'created_at',
        'is_finished',
        'group_name',
        'responsible_person',
        'address',
        'phone_number',
        'room',
        'email_address',
        'start_datetime',
        'end_datetime',
        'reason',
    )
    list_editable = (
    )
    ordering = (
        'created_at',
    )



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# hall_request_model_admin.py ends here
