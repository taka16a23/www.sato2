#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""garbage_event_model_serializer --

"""
from rest_framework import serializers

from home.models.garbage_event_model import GarbageEventModel


class GarbageEventModelSerializer(serializers.ModelSerializer):
    """GarbageEventModelSerializer

    GarbageEventModelSerializer is a serializers.ModelSerializer.
    Responsibility:
    """
    class Meta:
        model = GarbageEventModel
        fields = '__all__'



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# garbage_event_model_serializer.py ends here
