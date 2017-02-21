#!/bin/bash
        for i in `seq 1 6`;
        do
                convert $i.jpg $i.png
        done
