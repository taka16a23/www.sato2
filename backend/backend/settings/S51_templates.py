#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""S51_templates --

"""
from . import S21_path as path


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': path.TEMPLATE_PATHS,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# S51_templates.py ends here
