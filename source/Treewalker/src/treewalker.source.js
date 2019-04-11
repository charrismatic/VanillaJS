var NodeFilter = {
    FILTER_ACCEPT: 1,
    FILTER_REJECT: 2,
    FILTER_SKIP: 3,
    SHOW_ALL: -1,
    SHOW_ELEMENT: 1,
    SHOW_ATTRIBUTE: 2,
    SHOW_TEXT: 4,
    SHOW_CDATA_SECTION: 8,
    SHOW_ENTITY_REFERENCE: 16,
    SHOW_ENTITY: 32,
    SHOW_PROCESSING_INSTRUCTIONS: 64,
    SHOW_COMMENT: 128,
    SHOW_DOCUMENT: 256,
    SHOW_DOCUMENT_TYPE: 512,
    SHOW_DOCUMENT_FRAGMENT: 1024,
    SHOW_NOTATION: 2048
};

var TreeWalker = function (root, whatToShow, filter, expandEntityReferences) {
    this.root = root;
    this.whatToShow = whatToShow;
    this.filter = filter;
    this.expandEntityReferences = expandEntityReferences;
    this.currentNode = root;
    this.NodeFilter = NodeFilter;
};

TreeWalker.prototype.parentNode = function () {
    var testNode = this.currentNode;

    do {
        if (
            testNode !== this.root &&
            testNode.parentNode &&
            testNode.parentNode !== this.root
        ) {
            testNode = testNode.parentNode;
        } else {
            return null;
        }
    } while (this._getFilteredStatus(testNode) !== this.NodeFilter.FILTER_ACCEPT);
    (testNode) && (this.currentNode = testNode);

    return testNode;
};

TreeWalker.prototype.firstChild = function () {
    var testNode = this.currentNode.firstChild;

    while(testNode) {
        if(this._getFilteredStatus(testNode) === this.NodeFilter.FILTER_ACCEPT) {
            break;
        }
        testNode = testNode.nextSibling;
    }
    (testNode) && (this.currentNode = testNode);

    return testNode;
};

TreeWalker.prototype.lastChild = function () {
    var testNode = this.currentNode.lastChild;

    while (testNode) {
        if(this._getFilteredStatus(testNode) === this.NodeFilter.FILTER_ACCEPT) {
            break;
        }
        testNode = testNode.previousSibling;
    }
    (testNode) && (this.currentNode = testNode);

    return testNode;
};

TreeWalker.prototype.nextNode = function () {
    var testNode = this.currentNode;

    while (testNode) {
        if (testNode.childNodes.length !== 0) {
            testNode = testNode.firstChild;
        } else if (testNode.nextSibling) {
            testNode = testNode.nextSibling;
        } else {
            while (testNode) {
                if (testNode.parentNode && testNode.parentNode !== this.root) {
                    if (testNode.parentNode.nextSibling) {
                        testNode = testNode.parentNode.nextSibling;
                        break;
                    } else {
                        testNode = testNode.parentNode;
                    }
                }
                else return null;
            }
        }
        if (testNode && this._getFilteredStatus(testNode) === this.NodeFilter.FILTER_ACCEPT) {
            break;
        }
    }
    (testNode) && (this.currentNode = testNode);

    return testNode;
};

TreeWalker.prototype.previousNode = function () {
    var testNode = this.currentNode;

    while (testNode) {
        if (testNode.previousSibling) {
            testNode = testNode.previousSibling;
            while (testNode.lastChild) {
                testNode = testNode.lastChild;
            }
        }
        else {
            if (testNode.parentNode && testNode.parentNode !== this.root) {
                testNode = testNode.parentNode;
            }
            else testNode = null;
        }
        if (testNode && this._getFilteredStatus(testNode) === this.NodeFilter.FILTER_ACCEPT) {
            break;
        }
    }
    (testNode) && (this.currentNode = testNode);

    return testNode;
};


TreeWalker.prototype.nextSibling = function () {
    var testNode = this.currentNode;

    while(testNode) {
        (testNode.nextSibling) && (testNode = testNode.nextSibling);
        if(this._getFilteredStatus(testNode) === this.NodeFilter.FILTER_ACCEPT) {
            break;
        }
    }
    (testNode) && (this.currentNode = testNode);

    return testNode;
};


TreeWalker.prototype.previousSibling = function () {
    var testNode = this.currentNode;

    while(testNode) {
        (testNode.previousSibling) && (testNode = testNode.previousSibling);
        if(this._getFilteredStatus(testNode) == this.NodeFilter.FILTER_ACCEPT) {
            break;
        }
    }
    (testNode) && (this.currentNode = testNode);

    return testNode;
};


TreeWalker.prototype._getFilteredStatus = function (node) {
    var mask = ({
            /* ELEMENT_NODE */ 1: this.NodeFilter.SHOW_ELEMENT,
            /* ATTRIBUTE_NODE */ 2: this.NodeFilter.SHOW_ATTRIBUTE,
            /* TEXT_NODE */ 3: this.NodeFilter.SHOW_TEXT,
            /* CDATA_SECTION_NODE */ 4: this.NodeFilter.SHOW_CDATA_SECTION,
            /* ENTITY_REFERENCE_NODE */ 5: this.NodeFilter.SHOW_ENTITY_REFERENCE,
            /* ENTITY_NODE */ 6: this.NodeFilter.SHOW_PROCESSING_INSTRUCTION,
            /* PROCESSING_INSTRUCTION_NODE */ 7: this.NodeFilter.SHOW_PROCESSING_INSTRUCTION,
            /* COMMENT_NODE */ 8: this.NodeFilter.SHOW_COMMENT,
            /* DOCUMENT_NODE */ 9: this.NodeFilter.SHOW_DOCUMENT,
            /* DOCUMENT_TYPE_NODE */ 10: this.NodeFilter.SHOW_DOCUMENT_TYPE,
            /* DOCUMENT_FRAGMENT_NODE */ 11: this.NodeFilter.SHOW_DOCUMENT_FRAGMENT,
            /* NOTATION_NODE */ 12: this.NodeFilter.SHOW_NOTATION
        })[node.nodeType];

    return (
        (mask && (this.whatToShow & mask) == 0) ?
            this.NodeFilter.FILTER_REJECT :
            (this.filter && this.filter.acceptNode) ?
                this.filter.acceptNode(node) :
                this.NodeFilter.FILTER_ACCEPT
    );
};

if (!document.createTreeWalker) {
    document.createTreeWalker = function (root, whatToShow, filter, expandEntityReferences) {
        return new TreeWalker(root, whatToShow, filter, expandEntityReferences);
    };
}
