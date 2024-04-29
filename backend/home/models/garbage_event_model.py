#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""garbage_event_model --

"""
import urlparse

from django.db import models

from backend.settings import STATIC_URL, EventStatus, EVENT_STATUS, GARBAGE_IMGS



class GarbageEventModel(models.Model):
    """GarbageEventModel

    GarbageEventModel is a models.Model.
    Responsibility:
    """
    gid = models.TextField()
    summary = models.CharField(
        max_length=254,
        null=True,
        blank=True,
    )
    date = models.DateField(
        null=True,
        blank=True,
    )
    url = models.URLField(
        null=True,
        blank=True,
    )
    status = models.IntegerField(
        choices=EventStatus.as_tuple(),
        default=EventStatus.EVENT_CONFIRMED_STATUS,
    )

    def __str__(self):
        return self.summary

    def url_of_image(self, ):
        r"""SUMMARY

        url_of_image()

        @Return:

        @Error:
        """
        return GARBAGE_IMGS.get(self.summary, '')



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# garbage_event_model.py ends here
